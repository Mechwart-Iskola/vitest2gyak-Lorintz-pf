import {describe,it,expect} from 'vitest'
import { compareObjects, compareObjectArrays, commonKeys } from './functions'

describe('compareObjects',()=>{
//ugyanaz a két objektum

const obj1 = {a:1, b:2, c:3}
const obj2 = {a:1, b:2, c:3} 
const obj3 = {d:4, e:5}
const Alice = {name:'Alice', age:30, city:'Wonderland'}

it('identical key-value pairs',()=>{
    expect(compareObjects(obj1, obj2)).toBe(true)
})

//teszteld le olyan esetre amikor nem ugyanaz a két objektum
it('should return false for diff objects',()=>{
    expect(compareObjects(obj1, obj3)).toBe(false)
})

//teszteld le üres objektumokra
it('should handle empty objects',()=>{
    expect(compareObjects({}, {})).toBe(true)
})

//teszteld valós világbeli objektumokra
it('should handle real world objects correctly',()=>{
    expect(compareObjects(Alice,Alice)).toBe(true)
    expect(compareObjects(Alice,{name:'Bob', age:25, city:'Debrecen'})).toBe(false)
})

})

describe('compareObjectArrays',()=>{
    const ObjArray1 = [
         {a:1, b:2, c:3} ,
         {d:4, e:5, f:6},
         {g:7, h:8, i:9} ,
         {j:10, k:11, l:12},
    ]

    const ObjArray2 = [
        {a:1, b:2, c:3} ,
        {d:4, e:5, f:6},
        {g:7, h:8, i:9} ,
        {j:10, k:11, l:12},
   ]

   const ObjArray3 = [
    {a:1, b:2, c:3} ,
    {d:4, e:5, f:6},
    {g:7, h:8, i:9} ,
    {o:15, n:14, m:13},
]

const ObjArray4 = [
    {a:1, b:2, c:3} ,
    {d:4, e:5, f:6},
    
]

const Alice = {name:'Alice', age:30}
const Bob = {name:'Bob', age:25}

const objArray5 = [Alice,Bob]


   //teszteld le azonos objektum tömbökre
   it('return true for arrays of identical objects', ()=>{
    expect(compareObjectArrays(ObjArray1,ObjArray2)).toBe(true)
   })

   //teszteld le különböző objektum tömbökre, értékük legyen különböző

   it('return false for arrays of diff objects', ()=>{
    expect(compareObjectArrays(ObjArray1,ObjArray3)).toBe(false)
   })

   //tesztzeld különböző hosszúságú tömbökre

   it('return false for arrays of diff length objects', ()=>{
    expect(compareObjectArrays(ObjArray1,ObjArray4)).toBe(false)
   })

   //teszteld valós világbeli objektumokra
   it('handle arrays with real life data', ()=>{
    expect(compareObjectArrays(objArray5,objArray5)).toBe(true)
   })

   it('handle arrays with real life data', ()=>{
    expect(compareObjectArrays(objArray5,[{name:'Charlie', age:70},{name:'Frank', age:50}])).toBe(false)
   })


})

describe('commonkeys', ()=>{
    const obj1 = {a:1, b:2, c:3}
    const obj2 = {a:1, b:2, c:3} 

///ha azonos objektumokat adunk meg 
    it('returns every key name', ()=>{
        expect(commonKeys(obj1,obj2)).toEqual(['a','b', 'c'])
    })

//Ha nincs közös kulcs
it('returns empty array', ()=>{
    expect(commonKeys(obj1,{d:4, e:5})).toEqual([])
})

//üres objektumot

it('returns empty array', ()=>{
    expect(commonKeys({},{})).toEqual([])
})


//találj ki egy egyedi tesztesetet
it('returns empty array', ()=>{
    expect(commonKeys({name:'Charlie', age:70},{name:'Frank', age:50})).toEqual(['name', 'age'])
})

}
)

