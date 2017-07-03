import Vue from 'vue';
import Router from 'vue-router';
import Application from '@/components/application/application';
import Login from '@/components/login/Login';
import Register from '@/components/register/Register';
import FaceRecognition from '@/components/application/faceRecognition/FaceRecognition';
import ImageDataRepo from '@/components/application/faceRecognition/ImageDataRepo';
import UploadData from '@/components/application/faceRecognition/UploadData';
import RecognitionTest from '@/components/application/faceRecognition/RecognitionTest';
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/application',
      name: 'application',
      component: Application,
      children: [
        {
          path: 'face-recognition',
          name: 'FaceRecognition',
          component: FaceRecognition,
          redirect: { name: 'UploadData' },
          children: [
            {
              path: 'image-data-repo',
              name: 'ImageDataRepo',
              component: ImageDataRepo,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'upload-data',
              name: 'UploadData',
              component: UploadData,
              meta: {
                requireAuth: true
              }
            },
            {
              path: 'recognition-test',
              name: 'RecognitionTest',
              component: RecognitionTest,
              meta: {
                requireAuth: true
              }
            }
          ]
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  // to and from are Route Object,next() must be called to resolve the hook
  console.log(to);
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (window.localStorage.token) {
      next();
    } else {
      next('/index/login');
    }
  } else {
    next();
  }
});

export default router;
