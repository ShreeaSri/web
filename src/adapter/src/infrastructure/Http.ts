export interface IRequestOption {
    readonly method: string;
    readonly url: string;
    readonly headers?: Record<string, string>;
    readonly body?: any;
  }
  
  export interface IHttp {
    request(requestOption: IRequestOption): Promise<any>;
  }
  
  class Http implements IHttp {
    async request(requestOption: IRequestOption): Promise<any> {
      const option: RequestInit = { method: requestOption.method };
  
      if (requestOption?.headers) {
        option.headers = new Headers(requestOption.headers);
      }
  
      if (requestOption?.body) {
        option.body = JSON.stringify(requestOption.body);
      }
  
      try {
        const response = await fetch(requestOption.url, option);
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        return await response.json();
      } catch (error) {
        console.error('Error during HTTP request:', error);
        throw new Error('Failed to make HTTP request');
      }
    }
  }
  
  export default Http;
  