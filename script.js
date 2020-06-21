
$(function() {

    let inpTask = $('#inpTask');
    let btnAdd = $('#btnAdd');
    let btnClear = $('#btnClear');
    let ulList = $('#ulList');
    let btnCleanUp = $('#btnCleanUp');
    let btnSort = $('#btnSort');


    function addItem () {

        let listItem = $('<li>',{
            'class': 'list-group-item',
            text: inpTask.val()
        })

        listItem.click(()=>{
            listItem.toggleClass('done');
        })

        ulList.append(listItem);
        inpTask.val("");
        toggleInpBtn();
    }

    function clearDone() {
        $('#ulList .done').remove();
        toggleInpBtn();
    }

    function sortTask() {
        $('#ulList li.done').appendTo(ulList);
    }

    function toggleInpBtn() {
       btnAdd.prop('disabled',inpTask.val() === '');
       btnClear.prop('disabled',inpTask.val() === '');
       btnSort.prop('disabled',ulList.children().length < 1);
       btnCleanUp.prop('disabled',ulList.children().length < 1);
    }

    inpTask.keypress((e)=>{
        if(e === 13){
            addItem();
        }
    })

    inpTask.on('input',()=>{
        toggleInpBtn();
    })

    btnAdd.click(addItem);

    btnClear.click(()=>{
        inpTask.val("");
        toggleInpBtn();
    })

    btnCleanUp.click(clearDone);

    btnSort.click(sortTask);

})