import { writable } from 'svelte/store';

export const userProfile = writable({ email: '', isLoggedIn: false});
export const modal = writable(null);
export const windowStyle = writable({});