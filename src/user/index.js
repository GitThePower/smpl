exports.handler = async () => {
    return {
        body: { message: 'success'},
        headers: {
          'Content-Type': 'application/json'
        },
        isBase64Encoded: false,
        statusCode: 200
    };
};
