var initialState = [
    {
        id : 1,
        name : 'Iphone 7 Plus',
        image: 'data:image/jpeg;base64,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',
        description : 'Sản phẩm do Apple sản xuất',
        price : 500,
        inventoty : 10,
        rating : 3
    },
    {
        id : 2,
        name : 'Samsung Galaxy S7 Edge',
        image: 'https://hungmobile.vn/images/galaxy-s7-edge-my(mau-01)_590b11c65082e_04_05_2017_18_34_30.jpg',
        description : 'Sản phẩm do Samsung sản xuất',
        price : 400,
        inventoty : 15,
        rating : 4
    },
    {
        id : 3,
        name : 'Sony Xperia Z5 Dual',
        image: 'data:image/jpeg;base64,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',
        description : 'Sản phẩm do Sony sản xuất',
        price : 450,
        inventoty : 5,
        rating : 5
    },
];
//products này chỉ xuất dữ liệu chứ không có action nào cả
const products = (state = initialState, action) => {
    switch(action.type) {
        default : return [...state];
    }
}

export default products;