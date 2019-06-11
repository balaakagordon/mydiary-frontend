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
    writeEntry: {
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
            firstName: null,
            lastName: null,
            email: null,
            numEntries: null,
            joined: null
        },
        loading: false,
        status: null,
        errors: null
    },
    navbar: {
        authenticated: false,
    },
  };