"use server"

import { slugify } from "@/helper/Slugify";




//  =====================               =====================   
//  =====================   Category    =====================   
//  =====================               =====================   




export async function createCategory(title: string) {

    // Текстни авто тарзда slug килиб берадиган функция
    const slug = slugify(title)
  
    let response = await fetch("http://localhost:3000/api/category", {
      method: "POST",
      body: JSON.stringify({title, slug}),
    });
  
    response = await response.json();
    
    // revalidatePath('/dashboard/category')
    // redirect("/")
  }
  



 export async function getCategory() {
    const res = await fetch("http://localhost:3000/api/category", {
      method: "GET",
      cache:"no-cache",       
      //  next: { revalidate: 10 }, //  Ахамият берамиз маълумотни хар  10 секунда янгилаб туради
      //  action.tsx ни POST ичида  revalidatePath  борлиги учун бу   next: { revalidate: 10 }  ни ишлатмадик
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.json();
  }

  

  export async function DeleteCategory(id:number) {
    const res = await fetch(`http://localhost:3000/api/category/${id}`, {
      method: "DELETE",
      cache:"no-cache",       
      //  next: { revalidate: 10 }, //  Ахамият берамиз маълумотни хар  10 секунда янгилаб туради
      //  action.tsx ни POST ичида  revalidatePath  борлиги учун бу   next: { revalidate: 10 }  ни ишлатмадик
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.json();
  }




  export async function UpdateCategory(id:number, data:any) {
    
    let response = await fetch(`http://localhost:3000/api/category/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });
  
    response = await response.json();
  
    
    //revalidatePath('/dashboard/category')
    // redirect("/")
  }
  




//  =====================               =====================   
//  =====================   Carousel    =====================   
//  =====================               =====================   





  export async function createCarousel(body:any) {

    let response = await fetch("http://localhost:3000/api/carousel", {
      method: "POST",
      body: JSON.stringify({body}),
    });
    
    //revalidatePath('/dashboard/carousel')
    return response = await response.json();
        
    // redirect("/")
  }
    

  export async function getCarousel() {
    const res = await fetch("http://localhost:3000/api/carousel", {
      method: "GET",
      cache:"no-cache",       
      //  next: { revalidate: 10 }, //  Ахамият берамиз маълумотни хар  10 секунда янгилаб туради
      //  action.tsx ни POST ичида  revalidatePath  борлиги учун бу   next: { revalidate: 10 }  ни ишлатмадик
      headers: {
        "Content-Type": "application/json",
      },
    });
    //revalidatePath('/dashboard/carousel')
    return res.json();
  }


  export async function getCarouselForUser() {
    const res = await fetch("http://localhost:3000/api/carousel", {
      method: "GET",           
      next: { revalidate: 300 }, //  Ахамият берамиз маълумотни хар  300 секунда янгилаб туради
      //  action.tsx ни POST ичида  revalidatePath  борлиги учун бу   next: { revalidate: 10 }  ни ишлатмадик
      headers: {
        "Content-Type": "application/json",
      },
    });
    //revalidatePath('/dashboard/carousel')
    return res.json();
  }




  export async function DeleteCarousel(id:string) {
    const res = await fetch(`http://localhost:3000/api/carousel/${id}`, {
      method: "DELETE",
      cache:"no-cache",       
      // next: { revalidate: 1 }, //  Ахамият берамиз маълумотни хар  10 секунда янгилаб туради
      //  action.tsx ни POST ичида  revalidatePath  борлиги учун бу   next: { revalidate: 10 }  ни ишлатмадик
      headers: {
        "Content-Type": "application/json",
      },
    });

    //revalidatePath('/dashboard/carousel')
    return res.json();
  }




//  =====================               =====================   
//  =====================   Our Jobs    =====================   
//  =====================               =====================   



export async function createOurJob(body:any) {
  const slug = slugify(body.uz.title)
  body.slug = slug
  let response = await fetch("http://localhost:3000/api/our-jobs", {
    method: "POST",
    body: JSON.stringify(body),
  });
  
  
  return await response.json();
      
}
  

export async function getOurJob() {
  const res = await fetch("http://localhost:3000/api/our-jobs", {
    method: "GET",
    cache:"no-cache",       
    //  next: { revalidate: 10 }, //  Ахамият берамиз маълумотни хар  10 секунда янгилаб туради
    //  action.tsx ни POST ичида  revalidatePath  борлиги учун бу   next: { revalidate: 10 }  ни ишлатмадик
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}

export async function getOurJobForUser() {
  const res = await fetch("http://localhost:3000/api/our-jobs", {
    method: "GET",     
    next: { revalidate: 300 }, //  Ахамият берамиз маълумотни хар  300 секунда янгилаб туради
    //  action.tsx ни POST ичида  revalidatePath  борлиги учун бу   next: { revalidate: 10 }  ни ишлатмадик
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}


export async function getOurJobByName(name:string) {
  const res = await fetch(`http://localhost:3000/api/our-job/${name}`, {
    method: "GET",
    cache:"no-cache",       
    //  next: { revalidate: 10 }, //  Ахамият берамиз маълумотни хар  10 секунда янгилаб туради
    //  action.tsx ни POST ичида  revalidatePath  борлиги учун бу   next: { revalidate: 10 }  ни ишлатмадик
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}


export async function getOurJobByNameForUser(name:string) {
  const res = await fetch(`http://localhost:3000/api/our-job/${name}`, {
    method: "GET",     
    next: { revalidate: 300 }, //  Ахамият берамиз маълумотни хар  300 секунда янгилаб туради
    //  action.tsx ни POST ичида  revalidatePath  борлиги учун бу   next: { revalidate: 10 }  ни ишлатмадик
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}

export async function DeleteOurJob(id:string) {
  const res = await fetch(`http://localhost:3000/api/our-jobs/${id}`, {
    method: "DELETE",
    cache:"no-cache",       
    // next: { revalidate: 1 }, //  Ахамият берамиз маълумотни хар  10 секунда янгилаб туради
    //  action.tsx ни POST ичида  revalidatePath  борлиги учун бу   next: { revalidate: 10 }  ни ишлатмадик
    headers: {
      "Content-Type": "application/json",
    },
  });

  //revalidatePath('/dashboard/carousel')
  return res.json();
}








//  =====================               =====================   
//  =====================   Our Video    =====================   
//  =====================               =====================   



export async function createVideo(body:any) {
  const slug = slugify(body.uz.title)
  body.slug = slug
  let response = await fetch("http://localhost:3000/api/video", {
    method: "POST",
    body: JSON.stringify(body),
  });
  
  
  return await response.json();
      
}
  

export async function getVideo() {
  const res = await fetch("http://localhost:3000/api/video", {
    method: "GET",
    cache:"no-cache",       
    //  next: { revalidate: 10 }, //  Ахамият берамиз маълумотни хар  10 секунда янгилаб туради
    //  action.tsx ни POST ичида  revalidatePath  борлиги учун бу   next: { revalidate: 10 }  ни ишлатмадик
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}


export async function getVideoForUser() {
  const res = await fetch("http://localhost:3000/api/video", {
    method: "GET",         
    next: { revalidate: 300 }, //  Ахамият берамиз маълумотни хар  300 секунда янгилаб туради
    //  action.tsx ни POST ичида  revalidatePath  борлиги учун бу   next: { revalidate: 10 }  ни ишлатмадик
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}

export async function DeleteVideo(id:string) {
  const res = await fetch(`http://localhost:3000/api/video/${id}`, {
    method: "DELETE",
    cache:"no-cache",       
    // next: { revalidate: 1 }, //  Ахамият берамиз маълумотни хар  10 секунда янгилаб туради
    //  action.tsx ни POST ичида  revalidatePath  борлиги учун бу   next: { revalidate: 10 }  ни ишлатмадик
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}




//  =====================                     =====================   
//  =====================     Our Service     =====================   
//  =====================                     =====================   




export async function createOurService(body:any) {

  // Текстни авто тарзда slug килиб берадиган функция 
  const slug = slugify(body.uz.title)
  body.slug = slug
  let response = await fetch("http://localhost:3000/api/our-service", {
    method: "POST",
    body: JSON.stringify({body}),
  });

  return response = await response.json();
  
}



   
export async function getOurService() {
  const res = await fetch("http://localhost:3000/api/our-service", {
    method: "GET",
    cache:"no-cache",       
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}


export async function getOurServiceForUser() {
  const res = await fetch("http://localhost:3000/api/our-service", {
    method: "GET",
    next: { revalidate: 300 }, //  Ахамият берамиз маълумотни хар  300 секунда янгилаб туради     
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}




export async function getOurServicesByName(name:string) {
  const res = await fetch(`http://localhost:3000/api/our-services/${name}`, {
    method: "GET",
    cache:"no-cache",       
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}

export async function getOurServicesByNameForUser(name:string) {
  const res = await fetch(`http://localhost:3000/api/our-services/${name}`, {
    method: "GET",
    next: { revalidate: 300 }, //  Ахамият берамиз маълумотни хар  300 секунда янгилаб туради           
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}


export async function getOneOurService(id:string) {
  const res = await fetch(`http://localhost:3000/api/our-service/${id}`, {
    method: "GET",
    cache:"no-cache",       
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}



export async function DeleteOurService(id:string) {
  const res = await fetch(`http://localhost:3000/api/our-service/${id}`, {
    method: "DELETE",
    cache:"no-cache",           
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}




export async function UpdateOurService(id:number, data:any) {
  let slug = slugify(data?.uz?.title)
  data.slug = slug
  let response = await fetch(`http://localhost:3000/api/our-service/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });

  return response = await response.json();

  
}





//  =====================                     =====================   
//  =====================     Products        =====================   
//  =====================                     =====================   




export async function createProduct(body:any) {

  // Текстни авто тарзда slug килиб берадиган функция 
  const slug = slugify(body.uz.title)
  body.slug = slug

  let response = await fetch("http://localhost:3000/api/products", {
    method: "POST",
    body: JSON.stringify({body}),
  });

  return response = await response.json();
  
}



   
export async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    method: "GET",
    cache:"no-cache",       
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}


export async function getProductsForUser() {
  const res = await fetch("http://localhost:3000/api/products", {
    method: "GET",
    next: { revalidate: 300 }, //  Ахамият берамиз маълумотни хар  300 секунда янгилаб туради     
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}

export async function getOneProductForUser(id:string) {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    method: "GET",
    next: { revalidate: 300 }, //  Ахамият берамиз маълумотни хар  300 секунда янгилаб туради               
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}




export async function getOneProduct(id:string) {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    method: "GET",
    cache:"no-cache",       
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}



export async function DeleteProduct(id:string) {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    method: "DELETE",
    cache:"no-cache",           
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}




export async function UpdateProduct(id:number, data:any) {
  let slug = slugify(data?.uz?.title)
  data.slug = slug
  let response = await fetch(`http://localhost:3000/api/products/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });

  return response = await response.json();

  
}



export async function sendMessageToPhone(data:any) {	
  
  const datas = JSON.stringify({
    'send':'',
    'number':process.env.PHONE_NUMBER,																	
    'text':`${data}`,																									
    'token':process.env.TOKEN_PHONE,
    'id':'1282',
    'user_id':'731073721'
  })

  const url = 'https://api.xssh.uz/smsv1/?data='+encodeURIComponent(datas)
  
  const res = await fetch(url, {
    method: "POST",               
    headers: {"Content-Type": "application/json"},
  });
  return res.json()
}