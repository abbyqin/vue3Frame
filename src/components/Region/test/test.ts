import area from './area.json'
// import test from './test.json' //英文
// import engKey from './key.json'

export default function areaTest(){
  const keyData = [] as any
  function getTranslateLabel(arr:any){
    const t = arr.map((item: any)=>{
      keyData.push({label:item.label})
      // if(chanceLabel){
        const label = item.label.toLocaleLowerCase().split(' ').join('_')
        item.label = `region.${label}`
      // }
      console.log(item.label)

      if(item.array){
        getTranslateLabel(item.array)
      }
      return item

    })
    return t
  }


  getTranslateLabel(area)

  console.log(  getTranslateLabel(area))



  // const zhList = getTranslateLabel(area, false)
  // const tranList = getTranslateLabel(test, false)

  // console.log('area : >>> ',   getTranslateLabel(area, false))
  // console.log('test : >>> ',   getTranslateLabel(area, false))


  // function getnewarr(enList:any,zhList:any) {
  //   const obj = {} as any;
  //   enList.map( (v: any,i: number) => {
  //     const label = v.label.toLocaleLowerCase().split(' ').join('_').replace("'", '_').replace('-', '_')
  //     obj[label] = zhList[i].label;
  //   })
  //   return obj;
  // }

  // console.log('dddddddd >>>> ', JSON.stringify(getnewarr(engKey, keyData)))
}