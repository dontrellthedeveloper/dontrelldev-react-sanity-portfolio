export default{
    name:'skillsDatabase',
    title:'Database Skills',
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
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        },
        {
            name:'skillType',
            title:'Skill Type',
            type:'string',
            initialValue: 'database'
        },
        {
            name:'skillWebsite',
            title:'Skill Website',
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
        {
            type: "markdown",
            description: "A Github flavored markdown field with image uploading",
            name: "bio"
        },

    ]
}