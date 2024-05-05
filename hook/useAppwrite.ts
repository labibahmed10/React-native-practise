import { useEffect, useState } from "react";
import { Alert } from "react-native";

interface useAppwriteReturnType {
  data: any[];
  isLoading: boolean;
  refetchData: () => Promise<void>;
}

interface useAppwriteParams {
  (): Promise<any>;
}

const useAppwrite = (query: useAppwriteParams): useAppwriteReturnType => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await query();
      setData(response);
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const refetchData = () => fetchData();

  useEffect(() => {
    fetchData();
  }, []);

  return { data, refetchData, isLoading };
};

export default useAppwrite;
