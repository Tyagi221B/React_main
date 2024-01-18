import conf from "../conf/conf"
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setEndpoint(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        //call another function
        return this.login({email, password})

      } else {
        return userAccount;
      }

    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } 
    catch (error) {
      throw error;
    }
  }

  async getCurrentUser (){
    try {
        return await this.account.get()
    } catch (error) {
        console.log("Appwrite Service :: getCurrentUser :: Error ", error);
    }
    return null;
    //vaise bhi null hi return hota agar dikkat aati to , lekin flow flow ki baat hai , if else use kaelo , esse likhlo........
  }

  async logout(){
    try {
        await this.account.deleteSessions()
    } catch (error) {
        console.log("Appwrite Service :: logout :: Error ", error);
    }
  }
}

const authService = new AuthService();

export default authService;
