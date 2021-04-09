import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {User} from './user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';
 
  plist:any=[]

  urllink:any=[]
  Qut:number=0;
  //url:string="/assests/images/a.jpg"
  k:any=0;
  selectedfile(event:any)
  {
    
    if(event.target.files)
    {
        // for(var i=this.k;i<File.length;i++)
      // {
        var render=new FileReader;
        render.readAsDataURL(event.target.files[0]);
        render.onload=(event:any)=>
        {
         
          this.urllink.push(event.target.result);
        
          

         
        }
        
      }
     

    //}
    this.urllink.forEach(function (value:any) {
      console.log(value);
    });
    this.k=this.urllink.length;
      
      
      
    //   var render=new FileReader();
    //   render.readAsDataURL(event.target.files[0]);
      
    //   render.onload=(event:any)=>
    //   {
    //     this.urllink=event.target.result;
    //     console.log(this.urllink);
    // console.log(this.urllink)
    //   }
    // }
    
  }
  delete_card(i:any)
  {
    this.plist.splice(i,1)
    console.log(i);
  }
 
  ondelete(deleteme:any){
    this.itemcard.splice(deleteme,1)
    for(let i=0;i<this.plist.length;i++)
    {
      //console.log("starting qunatity"+this.plist[i].Quantity);
      if(this.plist[i].pname==deleteme.pname)
      {
        this.plist[i].Quantity=this.plist[i].Quantity+deleteme.Quantity;
        //console.log("all list quantity"+this.plist[i].Quantity);
      }
    }
    
  }
  onSubmit(val:any)
  {
      this.plist.push(val);

      // for(let j=0;j<this.plist.length;j++)
      // {
      //   console.log(this.plist[j].img)
      //   for(let i=0;i<this.urllink.length;i++)
      // {
      //   this.plist.img[j]=this.urllink[i];
      //   console.log( this.urllink[i])
      // }
     
      // }
     // this.urllink.pop();
      
      
      
  }
  dec()
  {
    //plist1.Quantity=plist1.Quantity+1;
    if(this.Qut<=0)
    alert('To less')
    else
    this.Qut=this.Qut-1;
    //console.log(this.Qut)

  }
  
  inc(plist1:any)
  {
    
      //console.log(this.plist[i].Quantity,this.Qut)
      if(this.Qut<plist1.Quantity)
      {
        this.Qut++;
        //console.log(true,this.Qut)
        
      }
      else{
        alert('out of stock')
      }
      
    
   
          
}
  itemcard:any=[];
  add_card(proname:any,proquantity:any,proprice:any,list:any)
  {
    
    var p={"pname":proname,"price":proprice,"Quantity":proquantity};
    
    
    
    this.itemcard.push(p);
    
    // for(let i=0;i<this.plist.length;i++)
    // {
    //   this.plist[i].Quantity=this.plist.Quantity[i]-proquantity;
    // }
      let a:number=proquantity;
      list.Quantity=list.Quantity-a;
        
      this.Qut=0;
     
    
      
  }
  
}
