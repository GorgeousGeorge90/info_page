
const checkFn = data => {
    let  profile = {
            login: 'Egor',
            password: '12345',
        }

    if ( JSON.stringify(data) === JSON.stringify(profile) ) {
        return true
    } else {
        return false
    }
}

export default checkFn