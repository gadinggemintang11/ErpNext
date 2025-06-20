frappe.ui.form.on("Sales Order", {
    validate: function(frm) {
        if (frm.doc.custom_delivery_mode === "Delivery" && !frm.doc.shipping_address_name) {
            frappe.throw("Shipping Address wajib diisi jika Delivery Mode adalah 'Delivery'.");
        }
    },
    custom_delivery_mode: function(frm) {
        if (frm.doc.custom_delivery_mode === "Delivery") {
            frm.set_df_property('shipping_address_name', 'reqd', 1);
        } else {
            frm.set_df_property('shipping_address_name', 'reqd', 0);
        }
    }
});
