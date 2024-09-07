//For running in local env
  For backend:
  cd backend
  npm i
  npm start 
  http://localhost:7676/

  For frontend
  cd frontend
  npm i 
  npm run dev
  
//backend hoisted: https://blogapp-backend-n7sv.onrender.com/
  Get all blogs:  GET /api/posts 
                      res : {id:number, title: string, content: string}[]
  Get post by Id: GET /api/post/:id
                      res : {id:number, title: string, content: string}[]
  Post a blog:    POST /api/posts
                      req: {title: string, content: string}
  Delete a blog:  DELETE /api/:id
                      
  Edit a  blog:   PUT /posts
                      req : {id:number, title: string, content: string}
//frontend hosted: https://blog-app-frontend-nine-psi.vercel.app/

