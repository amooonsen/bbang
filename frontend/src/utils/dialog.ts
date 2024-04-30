// import store from "@/store";

// let __dialog = ref({
//   dialogInfo: {
//     question: false,
//     dialogTitle: null,
//     dialogSubTitle: null,
//     dialogText: null,
//     dialogTextSub: null,
//     transition: null,
//     hideDialog: null,
//     submitDialog: null,
//     btnText: null,
//     btnTextLeft: null,
//     btnTextRight: null,
//   },
//   showDialog: false,
//   dialogCallBack: function () { alert("콜백을 확인해주세요") },
//   dialogCancelCallBack: function () { alert("콜백을 확인해주세요") },
//   makeDialog: function (payload) {
//     if (payload.question != null) {
//       this.dialogInfo.question = payload.question
//     } else {
//       this.dialogInfo.question = false
//     }

//     if (payload.dialogTitle) {
//       this.dialogInfo.dialogTitle = payload.dialogTitle
//     } else {
//       this.dialogInfo.dialogTitle = "다이얼로그 타이틀을 입력해주세요."
//     }

//     this.dialogInfo.dialogSubTitle = payload.dialogSubTitle

//     this.dialogInfo.dialogText = payload.dialogText

//     this.dialogInfo.dialogTextSub = payload.dialogTextSub

//     if (payload.btnText == null || payload.btnText === "") {
//       this.dialogInfo.btnText = "확인"
//     } else {
//       this.dialogInfo.btnText = payload.btnText
//     }

//     if (payload.btnTextLeft == null || payload.btnTextLeft === "") {
//       this.dialogInfo.btnTextLeft = "취소"
//     } else {
//       this.dialogInfo.btnTextLeft = payload.btnTextLeft
//     }

//     if (payload.btnTextRight == null || payload.btnTextRight === "") {
//       this.dialogInfo.btnTextRight = "확인"
//     } else {
//       this.dialogInfo.btnTextRight = payload.btnTextRight
//     }


//     if (payload.callback != null) {
//       this.dialogCallBack = payload.callback
//     } else {
//       this.dialogCallBack = null
//     }

//     if (payload.cancelCallback != null) {
//       this.dialogCancelCallBack = payload.cancelCallback
//     } else {
//       this.dialogCancelCallBack = null
//     }
//     // no
//     this.dialogInfo.hideDialog = () => {
//       this.showDialog = false
//       if (this.dialogCancelCallBack) {
//         this.dialogCancelCallBack()
//       }
//     }

//     // yes
//     this.dialogInfo.submitDialog = () => {
//       this.showDialog = false
//       if (this.dialogCallBack) {
//         this.dialogCallBack()
//       }
//     }

//     this.showDialog = true

//     store.set('dialog/dialogManager', __dialog)
//   }
// })

// export default __dialog



// 호출 함수

// async function bookBkmrTalk(cmntSno) {
//   dialog.value.makeDialog({
//     question: true,
//     dialogTitle: "북마크 해제",
//     dialogText: "북마크을 해제하시겠어요?",
//     btnTextLeft: "아니오",
//     btnTextRight: "예",
//     callback: async function () {
//       await mergeBkmrTalk(cmntSno, 'N')
//       snackbarMessage.value = "북마크이 해제 되었습니다."
//       showSnackbar.value = true

//       return await f_myBbsBkmrTalk(1);
//     }
//   })
// }