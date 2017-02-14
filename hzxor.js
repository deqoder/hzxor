function hzxor(input, key)
{
	var output = "";
	var j = 0;
	var klen = key.length;
	for (var i = 0; i != input.length; ++i)
	{	
		var input_code = input.charCodeAt(i);
		var input_key = key.charCodeAt(j++ % klen);
		var new_code;
		var ascii_sum = 0x20 + 0x7e;
		var cjk_base_v1_sum = 0x4e00 + 0x9fa5;
		if (input_code >= 0x20 && input_code < 0x7f)
		{
			new_code = ascii_sum - input_code + input_key;
			if (new_code > 0x7e) new_code = (new_code - 0x20) % (0x7f - 0x20)+ 0x20;
		}
		else if (input_code >= 0x4e00 && input_code <= 0x9fa5)
		{
			new_code = cjk_base_v1_sum - input_code + input_key;
			if (new_code > 0x9fa5) new_code = (new_code - 0x4e00) % (0x9fa6 - 0x4e00) + 0x4e00; 
		}
		else new_code = input_code;
		
		output += String.fromCharCode(new_code);

	}
	return output;
}
