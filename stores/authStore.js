import { makeAutoObservable } from 'mobx';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/auth';

class AuthStore {
    username = '';
    password = '';
    isLoading = false;
    error = null;
    token = null;

    constructor() {
        makeAutoObservable(this);
    }

    setUsername(val) { this.username = val; }
    setPassword(val) { this.password = val; }

    async login() {
        this.isLoading = true;
        this.error = null;
        try {
            const res = await axios.post(`${API_BASE_URL}/login`, {
                username: this.username,
                password: this.password
            });
            if (res.data.token) {
                this.token = res.data.token;
                alert('Login successful! Token: ' + res.data.token);
            } else {
                this.error = res.data.error || 'Login failed';
            }
        } catch (e) {
            this.error = e.response?.data?.error || 'Network error';
        } finally {
            this.isLoading = false;
        }
    }

    async register() {
        this.isLoading = true;
        this.error = null;
        try {
            const res = await axios.post(`${API_BASE_URL}/register`, {
                username: this.username,
                password: this.password
            });
            if (res.status === 200) {
                alert('Registration successful! Please login.');
                this.setUsername('');
                this.setPassword('');
            } else {
                this.error = res.data.error || 'Registration failed';
            }
        } catch (e) {
            this.error = e.response?.data?.error || 'Network error';
        } finally {
            this.isLoading = false;
        }
    }
}

export default new AuthStore();
