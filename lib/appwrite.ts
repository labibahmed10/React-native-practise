import { Account, Avatars, Client, Databases, ID, Query, Storage } from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.labib.nativeprac",
  projectId: "662df596002c45ea158e",
  databaseId: "662e146f003c2e5194b7",
  usersCollectionId: "662e148f00389ce72102",
  videosCollectionId: "662e14c4003bad7796b7",
  storageId: "662e19ba003e379314b0",
};

const { endpoint, platform, databaseId, projectId, usersCollectionId, videosCollectionId, storageId } = appwriteConfig;

// Init your react-native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteConfig.projectId) // Your project ID
  .setPlatform(appwriteConfig.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);
const storage = new Storage(client);

export const createUser = async ({ username, email, password }) => {
  try {
    // account.deleteSession('current');

    const newAccount = await account.create(ID.unique(), email, password, username);

    if (!newAccount) throw Error("Couldn't create an account");
    console.log(newAccount);

    const avatarUrl = avatars.getInitials(username);
    await signInUser({ email, password });

    const newUser = await databases.createDocument(appwriteConfig.databaseId, appwriteConfig.usersCollectionId, ID.unique(), {
      accountId: newAccount?.$id,
      email,
      username: newAccount?.name,
      avatar: avatarUrl,
    });

    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const signInUser = async ({ email, password }) => {
  try {
    account.deleteSession("current");
    const user = await account.createEmailSession(email, password);
    if (!user) throw Error("Couldn't login to account!");

    return user;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const getCurrentUser = async () => {
  try {
    const user = await account.get();
    if (!user) throw Error("User is not available");

    const currentUser = await databases.listDocuments(appwriteConfig.databaseId, appwriteConfig.usersCollectionId, user?.$id, Query.equal);

    if (!currentUser) throw Error("No user available");

    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
  }
};

export const getAllVideos = async () => {
  try {
    const videos = await databases.listDocuments(databaseId, videosCollectionId);
    return videos.documents;
  } catch (error) {
    throw new Error(error);
  }
};

export const getTrendingVideos = async () => {
  try {
    const videos = await databases.listDocuments(databaseId, videosCollectionId, [Query.orderDesc("$createdAt", Query.limit(7))]);

    return videos.documents;
  } catch (error) {
    throw new Error(error);
  }
};

// Get video posts that matches search query
export async function searchPosts(query) {
  try {
    const posts = await databases.listDocuments(appwriteConfig.databaseId, appwriteConfig.videosCollectionId, [Query.search("title", query)]);

    if (!posts) throw new Error("Something went wrong");

    return posts.documents;
  } catch (error) {
    throw new Error(error);
  }
}

// Get video posts created by user
export async function getUserPosts(userId) {
  try {
    const posts = await databases.listDocuments(appwriteConfig.databaseId, appwriteConfig.videosCollectionId, [Query.equal("creator", userId)]);

    return posts.documents;
  } catch (error) {
    throw new Error(error);
  }
}

// Sign Out
export async function signOut() {
  try {
    const session = await account.deleteSession("current");

    return session;
  } catch (error) {
    throw new Error(error);
  }
}

// Upload File
export async function uploadFile(file, type) {
  if (!file) return;

  const { mimeType, ...rest } = file;
  const asset = { type: mimeType, ...rest };

  try {
    const uploadedFile = await storage.createFile(appwriteConfig.storageId, ID.unique(), asset);

    const fileUrl = await getFilePreview(uploadedFile.$id, type);
    return fileUrl;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getFilePreview(fileId, type) {
  let fileUrl;

  try {
    if (type === "video") {
      fileUrl = storage.getFileView(appwriteConfig.storageId, fileId);
    } else if (type === "image") {
      fileUrl = storage.getFilePreview(appwriteConfig.storageId, fileId, 2000, 2000, "top", 100);
    } else {
      throw new Error("Invalid file type");
    }

    if (!fileUrl) throw Error;

    return fileUrl;
  } catch (error) {
    throw new Error(error);
  }
}

export async function createVideoPost(form) {
  try {
    const [thumbnailUrl, videoUrl] = await Promise.all([uploadFile(form.thumbnail, "image"), uploadFile(form.video, "video")]);

    const newPost = await databases.createDocument(databaseId, videosCollectionId, ID.unique(), {
      title: form.title,
      thumbnail: thumbnailUrl,
      video: videoUrl,
      prompt: form.prompt,
      creator: form.userId,
    });

    return newPost;
  } catch (error) {
    throw new Error(error);
  }
}
