// Mock data for Silver Leaf/**/**

const MOCK_DATA = {

    careHomes: [ * Silver Leaf API Integration Module * Silver Leaf API Integration Module

        { id: 1, name: 'Yusokh Care Solution', province: 'Bangkok', address: '350 So Sukhumvit 54', rating: 4, reviews: 7 },

        { id: 2, name: 'Ban Lalisa Sansai', province: 'Chiang Mai', address: 'Mae Faek Mai', rating: 4, reviews: 19 }, * Provides both mock data and HTTP API wrappers with automatic fallback * Handles communication with backend API and provides mock data for development

        { id: 3, name: 'Baan Horniamduai', province: 'Bangkok', address: 'Chatuchak District', rating: 3, reviews: 10 },

        { id: 4, name: 'Naya Residence', province: 'Nonthaburi', address: 'Suan Luang District', rating: 5, reviews: 23 } */ */

    ],

    reviews: [

        { id: 1, careHomeId: 1, rating: 4, comment: 'Great care', reviewer: 'Jenny' },

        { id: 2, careHomeId: 2, rating: 5, comment: 'Excellent service', reviewer: 'Susann' }// Configuration// ==================== Configuration ====================

    ]

};const API_BASE_URL = 'http://localhost:8080/api';const API_BASE_URL = 'http://localhost:8080/api';



// API wrapper with fallback to mock dataconst API_TIMEOUT = 5000; // 5 seconds timeout for backend detectionconst USE_MOCK_DATA = false; // Toggle this to switch between mock data and real API

const API_BASE = 'http://localhost:8080/api';

const USE_MOCK_DATA = true;let USE_MOCK_DATA = true; // Will auto-detect if backend is availableconst TIMEOUT = 5000; // Request timeout in ms



async function fetchAllCareHomes() {

    if (USE_MOCK_DATA) return MOCK_DATA.careHomes;

    try {// ==================== MOCK DATA ====================// ==================== Mock Data ====================

        const response = await fetch(`${API_BASE}/care-homes`);

        return await response.json();const MOCK_DATA = {const MOCK_DATA = {

    } catch (error) {

        console.log('Backend offline, using mock data');  careHomes: [    careHomes: [

        return MOCK_DATA.careHomes;

    }    {        {

}

      id: 1,            id: 1,

async function fetchCareHomeById(id) {

    if (USE_MOCK_DATA) return MOCK_DATA.careHomes.find(h => h.id === id);      name: 'Naya Care Home',            name: "Yusokh Care Solution",

    try {

        const response = await fetch(`${API_BASE}/care-homes/${id}`);      province: 'Bangkok',            description: "Premier care facility with modern amenities and experienced staff",

        return await response.json();

    } catch (error) {      rating: 4.8,            address: "350 So Sukhumvit 54, Phra Khanong Tai, Phra Khanong District",

        return MOCK_DATA.careHomes.find(h => h.id === id);

    }      reviews: 156,            city: "Bangkok",

}

      image: 'Img/Naya.png',            province: "Bangkok",

async function fetchReviewsByCareHome(careHomeId) {

    if (USE_MOCK_DATA) return MOCK_DATA.reviews.filter(r => r.careHomeId === careHomeId);      price: 15000,            postalCode: "10260",

    try {

        const response = await fetch(`${API_BASE}/reviews/care-home/${careHomeId}`);      description: 'Premium care facility with 24/7 nursing staff',            phoneNumber: "0832101020",

        return await response.json();

    } catch (error) {      contact: '02-123-4567'            email: "info@yusokh.com",

        return MOCK_DATA.reviews.filter(r => r.careHomeId === careHomeId);

    }    },            latitude: 13.7405,

}

    {            longitude: 100.5758,

async function loginUser(email, password) {

    if (USE_MOCK_DATA) {      id: 2,            imageUrl: "https://via.placeholder.com/400x300?text=Yusokh+Care",

        const user = { id: 1, email, name: 'Test User' };

        localStorage.setItem('user', JSON.stringify(user));      name: 'Agewell Care',            maxCapacity: 50,

        return user;

    }      province: 'Chiang Mai',            currentOccupancy: 35,

    try {

        const response = await fetch(`${API_BASE}/auth/login`, {      rating: 4.6,            averageRating: 4.5,

            method: 'POST',

            headers: { 'Content-Type': 'application/json' },      reviews: 89,            isVerified: true,

            body: JSON.stringify({ email, password })

        });      image: 'Img/agewell.png',            ownerName: "Somchai Yusokh"

        const data = await response.json();

        localStorage.setItem('user', JSON.stringify(data));      price: 12000,        },

        return data;

    } catch (error) {      description: 'Compassionate care in a home-like environment',        {

        const user = { id: 1, email, name: 'Test User' };

        localStorage.setItem('user', JSON.stringify(user));      contact: '053-123-4567'            id: 2,

        return user;

    }    },            name: "Ban Lalisa Sansai",

}

    {            description: "Cozy mountain-view care home with therapeutic garden",

function getStoredUser() {

    const user = localStorage.getItem('user');      id: 3,            address: "Mae Faek Mai Subdistrict, Sansai District",

    return user ? JSON.parse(user) : null;

}      name: 'Jenny Care Home',            city: "Chiang Mai",



console.log('✅ api.js loaded - Using mock data for development');      province: 'Phuket',            province: "Chiang Mai",


      rating: 4.7,            postalCode: "50210",

      reviews: 112,            phoneNumber: "0532101010",

      image: 'Img/jenny.png',            email: "info@lalisa.com",

      price: 14000,            latitude: 18.8667,

      description: 'Quality care with recreational activities',            longitude: 98.9167,

      contact: '076-123-4567'            imageUrl: "https://via.placeholder.com/400x300?text=Lalisa+Care",

    },            maxCapacity: 30,

    {            currentOccupancy: 22,

      id: 4,            averageRating: 4.7,

      name: 'Lalisa Senior Care',            isVerified: true,

      province: 'Nonthaburi',            ownerName: "Lalisa Sansai"

      rating: 4.5,        },

      reviews: 78,        {

      image: 'Img/lalisa.png',            id: 3,

      price: 13000,            name: "AgeWell Care Center",

      description: 'Affordable care with modern facilities',            description: "Specialized elderly care with medical supervision",

      contact: '02-987-6543'            address: "15/1 Petchburi Road, Rajathevee District",

    },            city: "Bangkok",

    {            province: "Bangkok",

      id: 5,            postalCode: "10400",

      name: 'Lamduan Care',            phoneNumber: "0825505505",

      province: 'Ayutthaya',            email: "info@agewell.com",

      rating: 4.9,            latitude: 13.7563,

      reviews: 134,            longitude: 100.5018,

      image: 'Img/lamduan.png',            imageUrl: "https://via.placeholder.com/400x300?text=AgeWell+Care",

      price: 16000,            maxCapacity: 40,

      description: 'Luxury care home with specialized services',            currentOccupancy: 28,

      contact: '035-123-4567'            averageRating: 4.3,

    }            isVerified: true,

  ],            ownerName: "Dr. Niran"

  reviews: [        },

    { id: 1, careHomeId: 1, author: 'User A', rating: 5, text: 'Excellent care and staff!', date: '2025-01-10' },        {

    { id: 2, careHomeId: 1, author: 'User B', rating: 4, text: 'Good service, recommended.', date: '2025-01-08' },            id: 4,

    { id: 3, careHomeId: 2, author: 'User C', rating: 5, text: 'Very satisfied with care.', date: '2025-01-05' }            name: "Ayuwat Senior Home",

  ],            description: "Family-oriented care with homey atmosphere",

  users: [            address: "45 Namdamri Road, Pathumwan District",

    { id: 1, email: 'admin@silverleaf.com', password: 'admin123', role: 'ADMIN', name: 'Admin User' }            city: "Bangkok",

  ]            province: "Bangkok",

};            postalCode: "10330",

            phoneNumber: "0864001234",

// ==================== AUTO-CONNECT DETECTION ====================            email: "info@ayuwat.com",

async function detectBackend() {            latitude: 13.7435,

  try {            longitude: 100.5313,

    const response = await fetch(`${API_BASE_URL}/health`, {            imageUrl: "https://via.placeholder.com/400x300?text=Ayuwat+Home",

      method: 'GET',            maxCapacity: 25,

      timeout: API_TIMEOUT            currentOccupancy: 18,

    });            averageRating: 4.6,

    if (response.ok) {            isVerified: true,

      USE_MOCK_DATA = false;            ownerName: "Supachai"

      console.log('✅ Backend detected at', API_BASE_URL);        }

      return true;    ],

    }    reviews: [

  } catch (error) {        {

    console.log('⚠️ Backend not available, using mock data');            id: 1,

  }            careHomeId: 1,

  USE_MOCK_DATA = true;            careHomeName: "Yusokh Care Solution",

  return false;            userId: 1,

}            userName: "Jenny",

            rating: 5,

// Initialize auto-detection on module load            comment: "Excellent care and staff! My mother is very happy here.",

detectBackend();            createdAt: "2024-10-15T10:30:00"

        },

// ==================== API WRAPPER FUNCTIONS ====================        {

            id: 2,

/**            careHomeId: 1,

 * Fetch all care homes            careHomeName: "Yusokh Care Solution",

 */            userId: 2,

async function fetchAllCareHomes() {            userName: "Lalisa",

  if (USE_MOCK_DATA) {            rating: 4,

    return Promise.resolve(MOCK_DATA.careHomes);            comment: "Great location and friendly staff. Highly recommend.",

  }            createdAt: "2024-10-10T14:20:00"

  try {        },

    const response = await fetch(`${API_BASE_URL}/care-homes`);        {

    if (response.ok) return await response.json();            id: 3,

  } catch (error) {            careHomeId: 2,

    console.error('Error fetching care homes:', error);            careHomeName: "Ban Lalisa Sansai",

  }            userId: 3,

  return MOCK_DATA.careHomes;            userName: "Naya",

}            rating: 5,

            comment: "Beautiful setting and excellent therapeutic programs.",

/**            createdAt: "2024-10-12T09:15:00"

 * Fetch top-rated care homes        }

 */    ],

async function fetchTopRatedCareHomes(limit = 3) {    users: [

  const allHomes = await fetchAllCareHomes();        {

  return allHomes.sort((a, b) => b.rating - a.rating).slice(0, limit);            id: 1,

}            email: "jenny@example.com",

            fullName: "Jenny",

/**            phoneNumber: "0801234567",

 * Fetch care homes by province            role: "USER",

 */            isActive: true

async function fetchCareHomesByProvince(province) {        }

  if (USE_MOCK_DATA) {    ]

    return MOCK_DATA.careHomes.filter(h => h.province.toLowerCase() === province.toLowerCase());};

  }

  try {// ==================== API Service Functions ====================

    const response = await fetch(`${API_BASE_URL}/care-homes/province/${province}`);

    if (response.ok) return await response.json();/**

  } catch (error) { * Fetch all care homes

    console.error('Error fetching care homes by province:', error); */

  }async function fetchAllCareHomes() {

  return MOCK_DATA.careHomes.filter(h => h.province.toLowerCase() === province.toLowerCase());    try {

}        console.log('[API] Fetching all care homes from:', API_BASE_URL);

        const controller = new AbortController();

/**        const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);

 * Fetch a single care home by ID        

 */        const response = await fetch(`${API_BASE_URL}/care-homes`, {

async function fetchCareHomeById(id) {            method: 'GET',

  if (USE_MOCK_DATA) {            headers: {

    return MOCK_DATA.careHomes.find(h => h.id === parseInt(id));                'Content-Type': 'application/json'

  }            },

  try {            signal: controller.signal

    const response = await fetch(`${API_BASE_URL}/care-homes/${id}`);        });

    if (response.ok) return await response.json();        

  } catch (error) {        clearTimeout(timeoutId);

    console.error('Error fetching care home:', error);        

  }        if (!response.ok) {

  return MOCK_DATA.careHomes.find(h => h.id === parseInt(id));            throw new Error(`HTTP ${response.status}: ${response.statusText}`);

}        }

        

/**        const data = await response.json();

 * Fetch reviews for a care home        console.log('[API] ✅ Successfully fetched care homes:', data);

 */        return data;

async function fetchReviewsByCareHome(careHomeId) {    } catch (error) {

  if (USE_MOCK_DATA) {        console.warn('[API] ⚠️ Error fetching from backend:', error.message);

    return MOCK_DATA.reviews.filter(r => r.careHomeId === parseInt(careHomeId));        console.log('[API] 📦 Falling back to mock data');

  }        return MOCK_DATA.careHomes;

  try {    }

    const response = await fetch(`${API_BASE_URL}/reviews/care-home/${careHomeId}`);}

    if (response.ok) return await response.json();

  } catch (error) {/**

    console.error('Error fetching reviews:', error); * Fetch top-rated care homes

  } */

  return MOCK_DATA.reviews.filter(r => r.careHomeId === parseInt(careHomeId));async function fetchTopRatedCareHomes() {

}    try {

        console.log('[API] Fetching top-rated care homes');

/**        const controller = new AbortController();

 * Create a new review        const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);

 */        

async function createReview(careHomeId, author, rating, text) {        const response = await fetch(`${API_BASE_URL}/care-homes/top-rated`, {

  const payload = { careHomeId, author, rating, text, date: new Date().toISOString().split('T')[0] };            signal: controller.signal

  if (USE_MOCK_DATA) {        });

    const newReview = { id: MOCK_DATA.reviews.length + 1, ...payload };        

    MOCK_DATA.reviews.push(newReview);        clearTimeout(timeoutId);

    return newReview;        

  }        if (!response.ok) throw new Error(`HTTP ${response.status}`);

  try {        const data = await response.json();

    const response = await fetch(`${API_BASE_URL}/reviews`, {        console.log('[API] ✅ Top-rated homes fetched');

      method: 'POST',        return data;

      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${getToken()}` },    } catch (error) {

      body: JSON.stringify(payload)        console.warn('[API] ⚠️ Error fetching top-rated:', error.message);

    });        return MOCK_DATA.careHomes.sort((a, b) => b.averageRating - a.averageRating);

    if (response.ok) return await response.json();    }

  } catch (error) {}

    console.error('Error creating review:', error);

  }/**

  return payload; * Fetch care homes by province

} */

async function fetchCareHomesByProvince(province) {

/**    try {

 * Register a new user        console.log('[API] Fetching care homes for province:', province);

 */        const controller = new AbortController();

async function registerUser(email, password, name) {        const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);

  const payload = { email, password, name, role: 'USER' };        

  if (USE_MOCK_DATA) {        const response = await fetch(`${API_BASE_URL}/care-homes/province/${encodeURIComponent(province)}`, {

    const newUser = { id: MOCK_DATA.users.length + 1, ...payload };            signal: controller.signal

    MOCK_DATA.users.push(newUser);        });

    localStorage.setItem('currentUser', JSON.stringify(newUser));        

    return { success: true, user: newUser };        clearTimeout(timeoutId);

  }        

  try {        if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const response = await fetch(`${API_BASE_URL}/auth/register`, {        const data = await response.json();

      method: 'POST',        console.log('[API] ✅ Province search completed');

      headers: { 'Content-Type': 'application/json' },        return data;

      body: JSON.stringify(payload)    } catch (error) {

    });        console.warn('[API] ⚠️ Error searching by province:', error.message);

    if (response.ok) {        return MOCK_DATA.careHomes.filter(h => h.province === province);

      const data = await response.json();    }

      localStorage.setItem('currentUser', JSON.stringify(data.user));}

      localStorage.setItem('token', data.token);

      return data;/**

    } * Fetch single care home details

  } catch (error) { */

    console.error('Error registering user:', error);async function fetchCareHomeById(id) {

  }    try {

  return { success: false, message: 'Registration failed' };        console.log('[API] Fetching care home details, ID:', id);

}        const controller = new AbortController();

        const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);

/**        

 * Login user        const response = await fetch(`${API_BASE_URL}/care-homes/${id}`, {

 */            signal: controller.signal

async function loginUser(email, password) {        });

  const payload = { email, password };        

  if (USE_MOCK_DATA) {        clearTimeout(timeoutId);

    const user = MOCK_DATA.users.find(u => u.email === email && u.password === password);        

    if (user) {        if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const mockToken = 'mock-jwt-token-' + Date.now();        const data = await response.json();

      localStorage.setItem('token', mockToken);        console.log('[API] ✅ Care home details fetched');

      localStorage.setItem('currentUser', JSON.stringify(user));        return data;

      return { success: true, user, token: mockToken };    } catch (error) {

    }        console.warn('[API] ⚠️ Error fetching care home:', error.message);

    return { success: false, message: 'Invalid credentials' };        return MOCK_DATA.careHomes.find(h => h.id === id);

  }    }

  try {}

    const response = await fetch(`${API_BASE_URL}/auth/login`, {

      method: 'POST',/**

      headers: { 'Content-Type': 'application/json' }, * Fetch reviews for a care home

      body: JSON.stringify(payload) */

    });async function fetchReviewsByCareHome(careHomeId) {

    if (response.ok) {    try {

      const data = await response.json();        console.log('[API] Fetching reviews for care home:', careHomeId);

      localStorage.setItem('token', data.token);        const controller = new AbortController();

      localStorage.setItem('currentUser', JSON.stringify(data.user));        const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);

      return { success: true, ...data };        

    }        const response = await fetch(`${API_BASE_URL}/reviews/care-home/${careHomeId}`, {

  } catch (error) {            signal: controller.signal

    console.error('Error logging in:', error);        });

  }        

  return { success: false, message: 'Login failed' };        clearTimeout(timeoutId);

}        

        if (!response.ok) throw new Error(`HTTP ${response.status}`);

/**        const data = await response.json();

 * Create a new care home (admin only)        console.log('[API] ✅ Reviews fetched');

 */        return data;

async function createCareHome(name, province, price, description) {    } catch (error) {

  const payload = { name, province, price, description, rating: 4.5, reviews: 0 };        console.warn('[API] ⚠️ Error fetching reviews:', error.message);

  if (USE_MOCK_DATA) {        return MOCK_DATA.reviews.filter(r => r.careHomeId === careHomeId);

    const newHome = { id: MOCK_DATA.careHomes.length + 1, ...payload, image: 'Img/logo.png' };    }

    MOCK_DATA.careHomes.push(newHome);}

    return newHome;

  }/**

  try { * Create new review

    const response = await fetch(`${API_BASE_URL}/care-homes`, { */

      method: 'POST',async function createReview(careHomeId, userId, rating, comment) {

      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${getToken()}` },    try {

      body: JSON.stringify(payload)        console.log('[API] Creating review for care home:', careHomeId);

    });        const token = getToken();

    if (response.ok) return await response.json();        

  } catch (error) {        const controller = new AbortController();

    console.error('Error creating care home:', error);        const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);

  }        

  return payload;        const response = await fetch(`${API_BASE_URL}/reviews`, {

}            method: 'POST',

            headers: {

// ==================== AUTH & STORAGE ====================                'Content-Type': 'application/json',

                ...(token ? { 'Authorization': `Bearer ${token}` } : {})

/**            },

 * Get stored JWT token            body: JSON.stringify({

 */                careHome: { id: careHomeId },

function getToken() {                user: { id: userId },

  return localStorage.getItem('token') || null;                rating,

}                comment

            }),

/**            signal: controller.signal

 * Get current logged-in user        });

 */        

function getCurrentUser() {        clearTimeout(timeoutId);

  const userStr = localStorage.getItem('currentUser');        

  return userStr ? JSON.parse(userStr) : null;        if (!response.ok) throw new Error(`HTTP ${response.status}`);

}        const data = await response.json();

        console.log('[API] ✅ Review created');

/**        return data;

 * Logout user    } catch (error) {

 */        console.warn('[API] ⚠️ Error creating review:', error.message);

function logoutUser() {        // Fallback to mock

  localStorage.removeItem('token');        const careHome = MOCK_DATA.careHomes.find(h => h.id === careHomeId);

  localStorage.removeItem('currentUser');        const user = MOCK_DATA.users.find(u => u.id === userId);

}        

        const newReview = {

/**            id: MOCK_DATA.reviews.length + 1,

 * Check if user is logged in            careHomeId,

 */            careHomeName: careHome?.name || 'Care Home',

function isLoggedIn() {            userId,

  return getToken() !== null && getCurrentUser() !== null;            userName: user?.fullName || 'Anonymous',

}            rating,

            comment,

// ==================== UTILITY FUNCTIONS ====================            createdAt: new Date().toISOString()

        };

/**        

 * Format care home data for display        MOCK_DATA.reviews.push(newReview);

 */        return newReview;

function formatCareHomeForDisplay(careHome) {    }

  return {}

    ...careHome,

    priceDisplay: formatPrice(careHome.price),/**

    ratingDisplay: careHome.rating.toFixed(1) * User registration

  }; */

}async function registerUser(userData) {

    try {

/**        console.log('[API] Registering user:', userData.email);

 * Format price with currency        

 */        const controller = new AbortController();

function formatPrice(price) {        const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);

  return new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(price);        

}        const response = await fetch(`${API_BASE_URL}/auth/register`, {

            method: 'POST',

/**            headers: {

 * Get API status                'Content-Type': 'application/json'

 */            },

function getAPIStatus() {            body: JSON.stringify(userData),

  return {            signal: controller.signal

    isOnline: !USE_MOCK_DATA,        });

    endpoint: API_BASE_URL,        

    usingMockData: USE_MOCK_DATA,        clearTimeout(timeoutId);

    timestamp: new Date().toISOString()        

  };        if (!response.ok) throw new Error(`HTTP ${response.status}`);

}        const data = await response.json();

        console.log('[API] ✅ User registered');
        return data;
    } catch (error) {
        console.warn('[API] ⚠️ Error registering user:', error.message);
        // Fallback to mock
        const newUser = {
            id: MOCK_DATA.users.length + 1,
            email: userData.email,
            fullName: userData.fullName,
            phoneNumber: userData.phoneNumber,
            role: userData.role || 'USER',
            isActive: true
        };
        
        MOCK_DATA.users.push(newUser);
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        return newUser;
    }
}

/**
 * User login
 */
async function loginUser(email, password) {
    try {
        console.log('[API] Logging in user:', email);
        
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);
        
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password }),
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        
        // Store token and user data
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('currentUser', JSON.stringify({
            id: data.id,
            email: data.email,
            fullName: data.fullName,
            role: data.role
        }));
        
        console.log('[API] ✅ User logged in successfully');
        return data;
    } catch (error) {
        console.warn('[API] ⚠️ Error logging in:', error.message);
        // Fallback to mock
        const user = MOCK_DATA.users.find(u => u.email === email);
        
        if (user) {
            const token = 'mock-jwt-token-' + Date.now();
            localStorage.setItem('authToken', token);
            localStorage.setItem('currentUser', JSON.stringify(user));
            return {
                token,
                id: user.id,
                email: user.email,
                fullName: user.fullName,
                role: user.role
            };
        }
        return null;
    }
}

/**
 * Create care home listing
 */
async function createCareHome(careHomeData, ownerId) {
    try {
        console.log('[API] Creating care home:', careHomeData.name);
        const token = getToken();
        
        if (!token) {
            throw new Error('User not authenticated');
        }
        
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);
        
        const response = await fetch(`${API_BASE_URL}/care-homes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                ...careHomeData,
                owner: { id: ownerId }
            }),
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        console.log('[API] ✅ Care home created');
        return data;
    } catch (error) {
        console.warn('[API] ⚠️ Error creating care home:', error.message);
        // Fallback to mock
        const newCareHome = {
            id: MOCK_DATA.careHomes.length + 1,
            ...careHomeData,
            currentOccupancy: 0,
            averageRating: 0,
            isVerified: false,
            ownerName: 'Current Owner'
        };
        
        MOCK_DATA.careHomes.push(newCareHome);
        return newCareHome;
    }
}

// ==================== Token Management ====================

/**
 * Get stored auth token
 */
function getToken() {
    return localStorage.getItem('authToken');
}

/**
 * Get current user
 */
function getCurrentUser() {
    const userStr = localStorage.getItem('currentUser');
    return userStr ? JSON.parse(userStr) : null;
}

/**
 * Logout user
 */
function logoutUser() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('currentUser');
}

/**
 * Check if user is logged in
 */
function isLoggedIn() {
    return !!getToken();
}

// ==================== Data Formatting Helpers ====================

/**
 * Format care home data for display
 */
function formatCareHomeForDisplay(careHome) {
    return {
        ...careHome,
        ratingStars: '★'.repeat(Math.floor(careHome.averageRating)) + 
                     '☆'.repeat(5 - Math.floor(careHome.averageRating)),
        occupancyPercent: Math.round((careHome.currentOccupancy / careHome.maxCapacity) * 100)
    };
}

/**
 * Format price
 */
function formatPrice(price) {
    return new Intl.NumberFormat('th-TH', {
        style: 'currency',
        currency: 'THB'
    }).format(price);
}

// ==================== Initialize ====================
console.log('%c🌿 Silver Leaf API Module Loaded', 'font-size: 14px; color: #d4a574; font-weight: bold;');
console.log(`%c📡 Backend URL: ${API_BASE_URL}`, 'font-size: 12px; color: #666;');
console.log('%c🔄 AUTO-CONNECT MODE: Will try to connect to Backend, fallback to mock data if unavailable', 'font-size: 12px; color: #0066cc; font-weight: bold;');

// Export functions for global use (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        fetchAllCareHomes,
        fetchTopRatedCareHomes,
        fetchCareHomesByProvince,
        fetchCareHomeById,
        fetchReviewsByCareHome,
        createReview,
        registerUser,
        loginUser,
        createCareHome,
        getToken,
        getCurrentUser,
        logoutUser,
        isLoggedIn,
        formatCareHomeForDisplay,
        formatPrice
    };
}
