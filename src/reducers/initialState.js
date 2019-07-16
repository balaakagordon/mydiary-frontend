export default {
    signup: {
        loading: false,
        message: null,
        status: '',
        token: '',
        errors: null
    },
    login: {
        loading: false,
        message: null,
        status: '',
        token: '',
        errors: null
    },
    getEntries: {
        entriesData: {
            entries: [],
            total: 0,
            currentPage: 1,
            from: null,
            to: null,
            lastPage: null,
            perPage: null,
            firstPageUrl: null,
            lastPageUrl: null,
            prevPageUrl: null,
            nextPageUrl: null
        },
        loading: false,
        message: null,
        status: null,
        errors: null
    },
    newEntry: {
        entry: {
            title: '',
            body: '',
            lastEdited: null
        },
        loading: false,
        status: null,
        message: null,
        errors: null
    },
    updateEntry: {
        entry: {
            title: '',
            body: '',
            lastEdited: null
        },
        loading: false,
        status: null,
        message: null,
        errors: null
    },
    getEntry: {
        entry: {
            id: null,
            author: null,
            title: '',
            body: '',
            lastEdited: null
        },
        loading: false,
        status: null,
        message: null,
        errors: null
    },
    getProfile: {
        profile: {
            id: null,
            firstName: null,
            lastName: null,
            email: null,
            image: null,
            lastUsed: null,
            currentEntries: null,
            allEntries: null,
            notifications: null,
            createdAt: null,
            // selectedFile: null
        },
        loading: false,
        status: null,
        errors: null
    },
    navbar: {
        authenticated: false,
    },
  };