import { Account, Client } from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.labib.nativeprac",
  projectId: "662df596002c45ea158e",
  databaseId: "662e146f003c2e5194b7",
  usersCollectionId: "662e148f00389ce72102",
  videosCollectionId: "662e14c4003bad7796b7",
  storageId: "662e19ba003e379314b0",
};

// Init your react-native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteConfig.projectId) // Your project ID
  .setPlatform(appwriteConfig.platform); // Your application ID or bundle ID.

const account = new Account(client);

export const createUser = ({ name, email, password }) => {
  // Register User
  account.create(ID.unique(), email, password, name).then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
