export default{
    name:'skillsBackEnd',
    title:'Backend Skills',
    type: 'document',
    fields:[
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'bgColor',
            title:'BgColor',
            type:'string'
        },
        {
            name:'icon',
            title:'Icon',
            type: 'image',
            options: {
                hotspot: true,
            },
        },

    ]
}