const baseUrl = "https://www.rosterbuster.aero"


const getDuties = () => ({
    type: 'FOLLOW_DUTY',
    meta: {
        offline: {
            // the network action to execute:
            effect: { url: `${baseUrl}/wp-content/uploads/dummy-response.json`, method: 'GET'},
            // action to dispatch when effect succeeds:
            commit: { type: 'FOLLOW_USER_COMMIT'},
            // action to dispatch if network action fails permanently:
            rollback: { type: 'FOLLOW_USER_ROLLBACK'}
        }
    }
});
