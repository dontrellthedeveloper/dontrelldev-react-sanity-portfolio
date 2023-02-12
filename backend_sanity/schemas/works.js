export default {
    name: 'works',
    title: 'Works',
    type: 'document',
    fields: [
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'projectLink',
            title: 'Project Link',
            type: 'string',
        },
        {
            name: 'codeLink',
            title: 'Code Link',
            type: 'string',
        },
        {
            name: 'workType',
            title: 'Work Type',
            type: 'string'
        },
        {
            name: 'workType2',
            title: 'Work Type 2',
            type: 'string'
        },
        {
            name: 'workType3',
            title: 'Work Type 3',
            type: 'string'
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
            name: 'imgUrl2',
            title: 'ImageUrl2',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'imgUrl3',
            title: 'ImageUrl3',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'imgUrl4',
            title: 'ImageUrl4',
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
        {
            type: "markdown",
            description: "A Github flavored markdown field with image uploading",
            name: "bio2"
        },
        {
            name: 'tags',
            title: 'Tags',
            type:'array',
            of: [
                {
                    name:'tag',
                    title:'Tag',
                    type:'string'
                }
            ]
        },

    ],
};