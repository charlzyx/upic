import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import "./App.css";
import "./globals.css";
import { DataTableDemo } from "./Table";

function App() {
	const [greetMsg, setGreetMsg] = useState("");
	const [name, setName] = useState("");

	async function greet() {
		// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
		setGreetMsg(await invoke("greet", { name }));
	}

	return (
		<div className="container">
			<Button>Welcome to Tauri!</Button>
			<br />
			<Input placeholder="Input somthing" />
			<br />
			<DataTableDemo />
		</div>
	);
}

export default App;
