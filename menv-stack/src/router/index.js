import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import BookList from '@/components/BookList'
import ShowBook from '@/components/ShowBook'
import CreateBook from '@/components/CreateBook'
import EditBook from '@/components/EditBook'
import Uploader from '@/components/Uploader'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [
   //  {
   //    path: '/',
   //    name: 'HelloWorld',
   //    component: HelloWorld
   //  }
   {
     path: '/',
     name: 'BookList',
     component: BookList
   },
   {
    path: '/show-book/:id',
    name: 'ShowBook',
    component: ShowBook
  },
  {
    path: '/add-book',
    name: 'CreateBook',
    component: CreateBook
  },
  {
    path: '/edit-book/:id',
    name: 'EditBook',
    component: EditBook
  },
  {
    path: '/uploader',
    name: 'Uploader',
    component: Uploader
  }, 
  {
    path: '/test',
    name: 'Test',
    component: Test
  }
  ]
})
