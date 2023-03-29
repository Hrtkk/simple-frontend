import axios from 'axios';
import { Config } from '../../config/config';

export interface IRestParam {
  method?: string;
  output?: string;
  body?: any;
  token?: string;
  params?: any;
  headers?: any
};

export class RestClient {
  private static _inst: RestClient;
  private axios: any;

  public static getInstance () {
    if (!RestClient._inst) {
      RestClient._inst = new RestClient();
    }
    return RestClient._inst;
  }

  constructor () {
  }

  async call<T>(service: string, par: IRestParam): Promise<T> {
    const serviceCall = Config.baseUrl + service;
    par.method = par.method || 'GET';
    par.output = par.output || 'application/json';
    return new Promise((resolve, reject) => {
      try {
        const servParam: any = {
          method: par.method,
          headers: {
            'Content-Type': par.output 
          },
          data: par.body ? JSON.stringify(par.body) : {}, 
        };

        if (par.params) {
          servParam.params = par.params
        }
        if (par.token) {
          servParam.headers.Authorization = 'Bearer ' + par.token;
        }
        if (par.headers) {
          servParam.headers = { ...servParam.headers, ...par.headers };
        }
        axios(serviceCall, servParam).then((response: any) => {
          if ([200, 201].indexOf(response.status) === -1) { return reject( response ); }
          resolve(response.data);
        }).catch((error: any) => {
          reject({ error: true, stack: error });
        })
      } catch (error) {
        reject({ error: true, stack: error });
      }
    });
  }

  async get (url: string, headerOptions: any) {
    return await axios.get('');
  }
  async post (url: string, headerOptions: any, payload: any) {
    return await axios.post('');
  }
  async put (url: string, headerOptions: any, payload: any) {
    return await axios.put('');
  }
  async delete (url: string, headerOptions: any) {
    return await axios.delete('');
  }
}