function Notes() {
    return (
        <div className=" text-sm space-y-3">
            <p className="text-lg font-bold">Welcome to KarimOS!</p>
            <p>This is my personal portfolio styled like a desktop system</p>

            <div>
                <p className="font-semibold">Navigation:</p>
                <ul className="list-disc list-inside">
                    <li>Open my socials from the bottom dock.</li>
                    <li>Mute the click sound using the activity bar.</li>
                    <li>Move and resize windows just like a real OS.</li>
                </ul>

            </div>

            <p>
                Explore the system — open the <strong>Projects</strong> folder, peek at my <strong>Tech Stack</strong>, or read <strong>Resume.txt</strong> for the full details.
            </p>
            <p>You can also learn more about me inside <strong>About Me.txt</strong>.</p>

            <p className="text-xs text-gray-400"><span className="text-error">*</span> Best viewed on desktop/laptop for the intended experience.</p>
        </div>
    );
}

export default Notes;