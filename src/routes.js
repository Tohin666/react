import MainPage from './components/MainPage';
import AboutPage from './components/AboutPage';
import NewsPage from './components/NewsPage';
import BlogPage from './components/BlogPage';
import BlogContainer from './containers/BlogsContainer/BlogContainer.jsx';


export default [
    {path: '/', exact: true, component: MainPage},
    {path: '/news', exact: true, component: NewsPage},
    // {path: '/blog', exact: true, component: BlogPage},
    {path: '/blog/:id', exact: true, component: BlogContainer}, // :id - шаблон
    {path: '/about', exact: true, component: AboutPage},
    // {path: '/comments', exact: true, component: CommentsContainer},
    // {path: '/comments/:id', exact: true, component: CommentContainer}
]