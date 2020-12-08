import axios from 'axios'
import qs from 'qs'



const  baseUrl = '/api'

axios.interceptors.response.use(res=>{
    console.log('======请求的路径:'+res.config.url+'========')
    console.log(res)
    return res
})

// 菜单添加

export const reqmenuAdd=(data)=>{
    return axios({
        url:baseUrl+'/api/menuadd',
        method:'post',
        data:data
    })
}


// 菜单列表
export const reqMenuList=(data)=>{
    return axios({
        url:baseUrl+'/api/menulist',
        method:'get', 
        params:data
    })
}


export const reqMenuListOne=(data)=>{
    return axios({
        url:baseUrl+'/api/menuinfo',
        method:'get', 
        params:data
    })
}

// 菜单编辑
export const reqMenuEdit=(data)=>{
    return axios({
        url:baseUrl+'/api/menuedit',
        method:'post', 
        data:data
    })
}


// 菜单删除
export const reqMenuDel=(data)=>{
    return axios({
        url:baseUrl+'/api/menudelete',
        method:'post', 
        data:data
    })
}


 ////////////////////////////////////////////////////////////////////////
// 角色管理

export const reqRoleAdd=(data)=>{
    return axios({
        url:baseUrl+'/api/roleadd',
        method:'post', 
        data:data
    })
}

// 角色列表
export const reqRoleList=()=>{
    return axios({
        url:baseUrl+'/api/roleList',
        method:'get', 
       
    })
}

// 角色一条数据
export const reqRoleListOne=(id)=>{
    return axios({
        url:baseUrl+'/api/roleinfo',
        method:'get', 
        params:id
       
    })
}

// 角色修改
export const reqRoleEdit=(id)=>{
    return axios({
        url:baseUrl+'/api/roleedit',
        method:'post', 
        data:id
       
    })
}

// 删除角色
export const reqRoleDel=(id)=>{
    return axios({
        url:baseUrl+'/api/roledelete',
        method:'post', 
        data:id
       
    })
}

///////////////////////管理员管理////////////////////

// 管理员管理

export const requserAdd=(data)=>{
    return axios({
        url:baseUrl+'/api/useradd',
        method:'post', 
        data:data
    })
}

// 管理员列表
export const requserList=()=>{
    return axios({
        url:baseUrl+'/api/userList',
        method:'get', 
       
    })
}

// 管理员一条数据
export const requserListOne=(id)=>{
    return axios({
        url:baseUrl+'/api/userinfo',
        method:'get', 
        params:id
       
    })
}

// 管理员修改
export const requsserEdit=(id)=>{
    return axios({
        url:baseUrl+'/api/useredit',
        method:'post', 
        data:id
       
    })
}

// 管理员删除
export const requserDel=(id)=>{
    return axios({
        url:baseUrl+'/api/userdelete',
        method:'post', 
        data:id
       
    })
}







