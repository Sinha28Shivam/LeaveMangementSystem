sap.ui.define(
    [
        "sap/m/MessageBox",
        "leavemgmtsyst/MyLib/Formatter"

    ],
    function (MessageBox, Formatter) {
        "use strict";

        return {
            successMessage: function (sMsg, sTitle) {
                MessageBox.show(Formatter.capatilizefirstletter(sMsg), {

                    title: Formatter.capatilizefirstletter(sTitle)
                });
            },
            // onSubmit: function(){
            //     MessageBox.show("")
            // }


        };
    });
