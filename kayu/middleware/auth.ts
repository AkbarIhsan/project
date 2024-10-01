export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client) { // Check if the code is running on the client
        try {
            const token = localStorage.getItem('token');

            if (!token) {
                return navigateTo('/admin/login'); // Redirect to the login page if not authenticated
            }
        } catch (error) {
            console.error('Error accessing localStorage:', error);
            return navigateTo('/admin/login');
        }
    }
});
