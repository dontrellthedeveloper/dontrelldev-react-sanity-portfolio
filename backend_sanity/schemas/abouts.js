export default{
    name:'abouts',
    title:'Abouts',
    type: 'document',
    fields:[
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'description',
            title:'Description',
            type:'string'
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        },

    ]
}