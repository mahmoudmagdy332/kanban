import axios from "axios";
import { useCallback, useState } from "react";
import { url } from '../config'


const useAddMemberHook = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [data, setData] = useState(null);
    const makeRequest = useCallback(async (requestData) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.post(`${url}/api/add_member`, requestData,{
            headers:{
                'Accept':'application/json',
                "Content-Type": "multipart/form-data",
            }});
        setData(response.data);
        setSuccess(true)
      } catch (err) {
        setError(err);
      }
      setIsLoading(false);
    }, []);
  
    return { makeRequest, data, isLoading, error,success };
}

export default useAddMemberHook