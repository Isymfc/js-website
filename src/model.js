import image from './assets/image.png'
import {TextBlock, ColumnsBlock, ImageBlock, TitleBlock} from "./classes/block";

const text = `<a href="http://reppon.site/" target="_blank">Rejep`

export const model = [
    new TitleBlock('Website builder by the JS', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            'text-align': 'center',
            padding: '1.5rem'}
    }),
    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: 'Picture'
    }),
    new TextBlock(text, {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    }),
    new ColumnsBlock(['Application built by the JavaScript',
        'Rejep is a faggot',
        'Serdar fucking asshole',
        'Ruslan a good person'], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }
    })
]