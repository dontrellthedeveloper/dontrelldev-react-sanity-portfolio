export default{
    name:'skills',
    title:'Skills',
    type: 'document',
    fields:[
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
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'imgUrl',
            title: 'ImageUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            title: 'FrontEnd Skills',
            name: 'frontend',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {type: 'skillsFrontEnd'}
                    ]
                }
            ]
        }
        // {
        //     name:'bgColor',
        //     title:'BgColor',
        //     type:'string'
        // },
        // {
        //     name:'icon',
        //     title:'Icon',
        //     type: 'image',
        //     options: {
        //         hotspot: true,
        //     },
        // },

    ]
}