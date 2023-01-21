export default{
    name:'certifications',
    title:'Certifications',
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
            name:'verifyLink',
            title:'Cert Verify Link',
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