export default {
    name: 'testimonials',
    title: 'testimonials',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string'
        },
        {
            name: 'imageurl',
            title: 'ImgURL',
            type: 'image',
            options: {
                hoptspot: true,
            }
        },
        {
            name: 'feedback',
            title: 'Feedback',
            type: 'string',
        },
    ]
}