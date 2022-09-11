import Home from '~/pages/home'
import Following from '~/pages/following'
import Upload from '~/pages/upload'
import OnlyHeader from '~/components/Layout/OnlyHeader'
const publicRouter = [
    {path: '/', component: Home},
    {path: '/following', component: Following},
    {path: '/@:nickname', component: Following},
    {path: '/upload', component: Upload, layout: OnlyHeader}
]
const privateRouter = [

]
export { publicRouter, privateRouter } 
