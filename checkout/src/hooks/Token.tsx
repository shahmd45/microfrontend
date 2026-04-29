import { useEffect } from 'react';
import { DEVURL, PPURL, SITURL } from './Contants';
import Loader from '../Loader/Loader';
import useToken from './useToken';

const win: any = window;
const baseUrl = window.location.origin.includes('localhost') ? "http://ssta004:8080" : window.location.origin;

interface BMProps {
  setBMToken: React.Dispatch<React.SetStateAction<boolean>>;
}

const BMToken = ({ setBMToken }: BMProps) => {
  let utilUrl = baseUrl;

  if (baseUrl.includes('apisit')) {
      utilUrl = SITURL;
  } else if (baseUrl.includes('apipreprod')) {
      utilUrl = PPURL;
  } else if (baseUrl.includes('apidev')) {
      utilUrl = DEVURL;
  }
  
  const url = `${utilUrl}/mobilyTheme4/BzFvwmzXvs`;
  const req = { "dataT": "bm" }
  const { response, loading } = useToken(url, req, setBMToken);
  
  useEffect(() => {
    if (response && !win["bmToken"]) {
      console.log('response', response)
      win["bmToken"] = response;
    }
  }, [response]);

  return (
    <>
      {loading && <Loader loading={loading} />}
    </>
  )
}


export { BMToken }