import { ProductListService } from './../../services/product-list.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  contactForm= new FormControl()
id=""
 indexUpdate=-1
  profileForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  image: new FormControl(''),
  price: new FormControl(''),
  });
objEdit:any
editMode:boolean=false
  validForm: boolean=false;
  constructor(private route:ActivatedRoute,
    private _snackBar: MatSnackBar,
    private data:ProductListService
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param=>{
      const id=param.get('id')||''
      
     if(id){
      this.id=id;
     }
//log("id is ",this.id)
this.objEdit=this.data.list.filter(function(x){if(x.id===id){
  return(x)
}

})
////log("Edit obj is ",this.objEdit[0].id)
if(this.id){
  this.editMode=true
 
}
if(this.editMode){
  this.profileForm.patchValue({
    id: this.objEdit[0].id,
    name: this.objEdit[0].name,
    description: this.objEdit[0].description,
    image:this.objEdit[0].imageUrl,
    price:this.objEdit[0].price
  });
}

    })
   
    //  //log("edit mode ",this.objEdit[0].imageUrl)
      this.profileForm.valueChanges.subscribe(val=>{
        if(this.profileForm.value.description && this.profileForm.value.name  && this.profileForm.value.price ){
          this.validForm=true
        }
      }

      )
  
  }
  addProduct(){
    var obj=this.profileForm.value
    this.data.list.push(obj)
    this.data.changeData(this.data.list); 
    //log("new obj is ",obj)
  //  this._snackBar.open("successfully added product !",{duration:1000});
    this._snackBar.open("successfully added product !", "", {
      duration: 2000,
   });
  }
  onSubmit(){
    
  }
  updateProfile(){
    //log("called",this.data.list)
    //log("profileForm",this.profileForm.value)
    var obj=this.profileForm.value
   
    //   this.indexUpdate=this.data.list.findIndex((obj=>{//log("obj id is "+obj.id+"index si "+this.id),
    //  obj.id==this.id}))
    //log("innnnnnn is ",this.data.list.findIndex((obj=>obj.id==this.id)))
     this.indexUpdate=this.data.list.findIndex((obj=>obj.id==this.id))
     this.data.list[this.indexUpdate].name=obj.name
     this.data.list[this.indexUpdate].description=obj.description
     this.data.list[this.indexUpdate].price=obj.price
     this.data.list[this.indexUpdate].image=obj.imageUrl
     //log("list is ",this.data.list)
     //log("index is ",this.indexUpdate)
  //  this.data.update(this.id, this.profileForm.value)
    //.pipe(first())
    this.data.list= this.data.list.reverse()
    this.data.changeData(this.data.list); 
   // this._snackBar.open("successfully updated product !");
   this._snackBar.open("successfully updated product !", "", {
    duration: 2000,
 });
  }
}
