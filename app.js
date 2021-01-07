/*Object Assign yöntemi, tüm numaralandırılabilir kendi özelliklerini bir veya daha fazla kaynak nesneden bir hedef nesneye kopyalar. Hedef nesneyi döndürür.yöntemi, tüm numaralandırılabilir kendi özelliklerini bir veya daha fazla kaynak nesneden bir hedef nesneye kopyalar. Hedef nesneyi döndürür. */

/* Object ASSİGN
var a = {x:10,y:20};
var b = {z:10,k:20};


var source = Object.assign(a,b);

    console.log(source) { x: 10, y: 20, z: 10, k: 20 }
,*/

/*Obje Create -> Obje oluşturmaya yarar */
/*
var newobj = Object.create({isim:"buurak",soyad:"selcuk"})

console.log(newobj.isim)

*/
    /*
    Object.entries () yöntemi, belirli bir nesnenin kendi numaralandırılabilir dize anahtarlı özellik [anahtar, değer] çiftlerinin dizisini, for ... in döngüsü tarafından sağlananla aynı sırada döndürür. (Tek önemli fark, for ... in döngüsünün prototip zincirindeki özellikleri de numaralandırmasıdır).
    key ve value çitfi döner
  
  const object1 = {
   a: 'somestring',
   b: 42
 };
    for (const [key,value] of Object.entries(object1)){
    
        console.log("Keyler : " + key)
        console.log(value)


}
    */  
    /*
    
    var notfreeze = {a:1,b:2};

    var s = Object.freeze(notfreeze);

    notfreeze.a = 100;

    console.log(notfreeze)


    Freeze bir objeyi dondurur ve artık ekleme,kaldırma,veri değiştirme işlemleri yapılamaz
    
    
    
    */ 
/*bject.getOwnPropertyNames () yöntemi, belirli bir nesnede doğrudan bulunan tüm 
özelliklerin (Symbol kullananlar dışında numaralandırılamayan özellikler dahil) 
bir dizisini döndürür. 
    var al = {ad:"burak",age:17}


        var b =  Object.getOwnPropertyNames(al) 
            console.log(b) //ad,age


*/
/*

isFrozen--> bir değer'in donup donmadığında bakar;
    var  a = {x:1,y:2};
    Object.freeze(a)
    console.log(Object.isFrozen(a))
    */

/**
 *
 * Object.keys()
Returns an array containing the names of all of the given object's own enumerable string properties.
 */
/**
 *Object.seal () yöntemi, bir nesneyi mühürler, ona yeni özelliklerin eklenmesini engeller ve mevcut tüm özellikleri yapılandırılamaz olarak işaretler. Mevcut özelliklerin değerleri, yazılabilir oldukları sürece değiştirilebilir.
 * 
 * 
 * 
 * 
 * 
 * 
 * const object1 = {
  property1: 42
};

Object.seal(object1);
object1.property1 = 33;
console.log(object1.property1);
// expected output: 33

delete object1.property1; // cannot delete when sealed
console.log(object1.property1);
 * 
 */

