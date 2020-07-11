$(document).ready(function () {
    $('#duration').on({
        change: () => {$('#price').text(price())}
    })

    $('#quantity').on({
        change: () => {$('#price').text(price())}
    })

    $('.btn_key').click(function () {
        let keys = $(this).attr('data-key').split("|nextkey|")
        keys.splice(-1,1)
        let keysString = ""
        for (let key in keys) {
            keysString += `
                <div class="fake_input btn-block">
                    <text style="text-align: left; font-size: 16px; margin-left: 8px" class="blue_text">${keys[key]}</text>
                    <button onclick="copy('${keys[key]}')" class="copy_icon"></button>
                </div>            
            `
        }

        Swal.fire({
            html:
                `<p class="title_swal">Thank you for buying</p>
                <p class="text_swal"> Get the key to activate the hack.</p>
                ${keysString}
                <button onclick="Swal.close()" class="confirm_swal btn-block">Done</button>`
            ,
            showConfirmButton: false,
            showCloseButton: false,
            showCancelButton: false,
            focusConfirm: false,
            width: 331,
            padding: "28px",
            background: '#1F2346',
        })
        $('.swal2-show').addClass("swal_updater");
    });

    $('#btn_buy').click(function () {
        if ($(this).hasClass("disabled")) return
        Swal.fire({
            html: `<p class="title_swal">Payment</p>
                <p style="margin-bottom: 0" class="text_swal"> Select payment method.</p>
                <div class="payment_methods"> 
                    <div>
                        <input type="radio" id="bitcoin" value="bitcoin" name="payment_methods"/>
                        <label  class="payment_method bitcoin_method" for="bitcoin" ></label>
                    </div>
                    <div>
                        <input type="radio" id="paypal" value="paypal" name="payment_methods" />
                        <label class="payment_method paypal_method" for="paypal" ></label>
                    </div>
                    <div>
                        <input type="radio" id="credit_card" value="credit_card" name="payment_methods" />
                        <label style="" class="payment_method credit_card_method" for="credit_card" ></label>
                    </div>
                </div>
                <input type="email" class="form-control input_swal btn-block" id="exampleFormControlInput1" placeholder="name@example.com">
                <button onclick="pay()" class="confirm_swal btn-block">Pay</button>`
            ,
            showConfirmButton: false,
            showCloseButton: false,
            showCancelButton: false,
            focusConfirm: false,
            padding: "28px",
            width: 424,
            background: '#1F2346',
        });
        $('.swal2-show').addClass("swal_updater");
    });

    $('.tooltip-show.fast').tooltip({delay: { "show": 0, "hide": 0 }, html: true});
    $('.tooltip-show.slow').tooltip({delay: { "show": 0, "hide": 3000 }, html: true});
});

function copy(text) {
    if ($('#tmp').length) {
        $('#tmp').remove();
    }
    $('<textarea id="tmp" />')
        .appendTo($('.swal2-container'))
        .val(text)
        .focus()
        .select();
    document.execCommand("copy");
    $('#tmp').remove()
}

function pay() {

}

function price() {
    if ($('#duration').val()) $('#btn_buy').removeClass("disabled")
    return $('#duration').val() * ($('#quantity').val() || 1)
}