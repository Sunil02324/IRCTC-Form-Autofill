var form_fill = function() {
    var input = {
        "confirm_ticket_only": true,        //if you want to book only confirmed tickets
        "auto_upgrade": true,               //if you want to use auto upgradation
        "mobile_number": 9876543210,        //Mobile number to which notication is to be sent
        "persons": [                    //details of each adult, max number is 4
            {
                "name": "Name 1",
                "age": 0,
                "gender": 1,
                "icard_type": 2,
                "icard_number": "########"
            },
            {
                "name": "Name 2",
                "age": 12,
                "gender": 1,
                "icard_type": 2,
                "icard_number": "########"
            }
            //and so on if there are more person
        ]
    };
    //Do not touch below this line if you are not a developer
    var field_values = {
        "icard_type": {
            1: "DRIVING_LICENSE",
            2: "PASSPORT",
            3: "PANCARD",
            4: "VOTER_ICARD",
            5: "GOVT_ICARD",
            6: "STUDENT_ICARD",
            7: "BANK_PASSBOOK",
            8: "CREDIT_CARD",
            9: "UNIQUE_ICARD"
        },
        "gender": {
            1: "M",
            2: "F"
        }
    };
    var input_fields = {
        "name": ["text", "addPassengerForm\\:psdetail\\:{#}\\:psgnName"],
        "age": ["text", "addPassengerForm\\:psdetail\\:{#}\\:psgnAge"],
        "gender": ["list", "addPassengerForm\\:psdetail\\:{#}\\:psgnGender"],
        "icard_type": ["list", "addPassengerForm\\:psdetail\\:{#}\\:idCardType"],
        "icard_number": ["text", "addPassengerForm\\:psdetail\\:{#}\\:idCardNumber"],
        "mobile_number": ["text", "addPassengerForm\\:mobileNo"],
        "confirm_ticket_only": ["tick", "addPassengerForm\\:onlyConfirmBerths"],
        "auto_upgrade": ["tick", "addPassengerForm\\:autoUpgrade"]
    }
    $.each(input, function(key, item) {
        if (key === "persons") {
            $.each(item, function(key, detail) {
                $.each(detail, function(field, value) {
                    var type = input_fields[field][0];
                    var id = "#" + input_fields[field][1].replace("{#}", key);
                    if (type === "text") {
                        $(id).val(value);
                    } else if (type === "list") {
                        value = field_values[field][value];
                        $(id).val(value);
                    } else if (type === "tick") {
                        if (value === true) {
                            $(id).attr("checked", "checked");
                        } else {
                            $(id).attr("checked", false);
                        }
                    }
                });
            });
        } else {
            var type = input_fields[key][0];
            var id = "#" + input_fields[key][1];
            if (type === "text") {
                $(id).val(item);
            } else if (type === "tick") {
                if(item === true) {
                    $(id).attr("checked", "checked");
                } else {
                    $(id).attr("checked", false);
                }
            } else if (type === "list") {
                var value = field_values[key][item];
                $(id).val(value);
            }
        }
    });
}
form_fill();
