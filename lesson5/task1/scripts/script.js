function createFolder() {
    let folder = []
    return {
        addFile: file => {
            folder.push(file)
        },
        showAllfiles: () => {
            console.table(folder)
        }
    }
}
let folder1 = createFolder()
folder1.addFile({title:"java", type:"work"})
folder1.addFile({title:"chess", type:"game"})
folder1.addFile({title:"sound", type:"music"})
console.log(folder1.showAllfiles())
