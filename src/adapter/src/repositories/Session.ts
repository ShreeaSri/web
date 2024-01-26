import { IHttp } from '../infrastructure/Http';
import { IStorage } from '../infrastructure/Storage';
import { IUserDTO } from '../../../domain/src/dto/UserDTO';

class SessionRepository {

  constructor(
    private readonly baseURL: string,
    private readonly http: IHttp,
    private readonly storage: IStorage
  ) {}

  async login(userDTO: IUserDTO): Promise<string> {
    try {
      const response = await this.http.request({
        method: 'POST',
        url: `${this.baseURL}/login`,
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          id: userDTO.id,
          pw: userDTO.pw
        }
      });

      if (!response || !response.token) {
        throw new Error('Invalid response or missing token.');
      }

      const token: string = response.token;
      // Remove the console.log in a production environment
      console.log(token);
      return token;
    } catch (error) {
      console.error('Error during login:', error);
      throw new Error('Failed to log in. Please try again.');
    }
  }

  async getToken(): Promise<string> {
    try {
      return await this.storage.get('token');
    } catch (error) {
      console.error('Error getting token from storage:', error);
      throw new Error('Failed to get token.');
    }
  }

  async setToken(token: string): Promise<void> {
    try {
      return await this.storage.set('token', token);
    } catch (error) {
      console.error('Error setting token in storage:', error);
      throw new Error('Failed to set token.');
    }
  }

  async removeToken(): Promise<void> {
    try {
      return await this.storage.remove('token');
    } catch (error) {
      console.error('Error removing token from storage:', error);
      throw new Error('Failed to remove token.');
    }
  }
}

export default SessionRepository;
