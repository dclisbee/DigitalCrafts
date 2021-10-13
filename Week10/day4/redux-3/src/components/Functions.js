//import from supabase references
//install supabase
import { createClient } from "@supabase/supabase-js";
import { useSelector } from "react-redux";

const supabase = createClient(
	"https://pzztkkjffgageidebrov.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMTIwNDMwNSwiZXhwIjoxOTQ2NzgwMzA1fQ.8kYKNI94u9NzoQL01LfA_oD2XlNB1yXlAMywQtsbiI4"
);
export async function createUserLogin(e, userData) {
	e.preventDefault();
	const { data, error } = await supabase
		.from("userRegister")
		.insert([userData]);
}
