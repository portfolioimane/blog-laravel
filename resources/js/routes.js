import AdminHome from './components/admin/AdminHome.vue'
import Ex from './components/ExampleComponent.vue'
import CategoryList from './components/admin/category/List.vue'
import AddCategory from './components/admin/category/New.vue'
import EditCategory from './components/admin/category/Edit.vue'

// FrontEnd Component
import PublicHome from './components/public/PublicHome.vue'
import BlogPost from './components/public/blog/BlogPost.vue'
import SingleBlog from './components/public/blog/SingleBlog.vue'

// Post
import PostList from './components/admin/post/List.vue'
import AddPost from './components/admin/post/New.vue'
import EditPost from './components/admin/post/Edit.vue'
export const routes = [
    {
        path:'/blog/public/home',
        component:AdminHome
    },
    {
    	path:'/blog/public/post',
    	component:Ex
    },
    {
        path:'/blog/public/category-list',
        component:CategoryList
    },
    {
        path:'/blog/public/add-category',
        component:AddCategory
    },
    {
        path:'/blog/public/edit-category/:categoryid',
        component:EditCategory
    },
    //Post
    {
        path:'/blog/public/post-list',
        component:PostList
    },
    {
        path:'/blog/public/add-post',
        component:AddPost
    },
    {
        path:'/blog/public/edit-post/:postid',
        component:EditPost
    },
    //Frontend Route
    // Frontend Route
    {
        path:'/blog/public',
        component:PublicHome
    },
    {
        path:'/blog/public/blog',
        component:BlogPost
    },
    {
        path:'/blog/public/blog/:id',
        component:SingleBlog
    },
    {
        path:'/blog/public/categories/:id',
        component:BlogPost
    },
];
