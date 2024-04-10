import { useCookies } from 'react-cookie';

export const useCookie = (name: string[]) => {
  const [cookies, setCookie, removeCookie] = useCookies(name);

  // Retorna o valor do cookie pelo nome
  function getCookieValue(name: string) {
    return cookies[name];
  }

  // Define o valor do cookie pelo nome
  function setCookieValue(name: string, value: string, options: object) {
    setCookie(name, value, options);
  }

  // Remove o cookie pelo nome
  function removeCookieValue(name: string) {
    removeCookie(name);
  }

  return { getCookieValue, setCookieValue, removeCookieValue };
};
