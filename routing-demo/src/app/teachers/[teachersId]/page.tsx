//src/app/teachers/[teacherId]/page.tsx
type Props = {
    params: {
        teachersId: string
    }
}

export default function TeacherProfilePage({params}: Props) {
    const { teachersId } = params;
    return (
        <h1>Melihat Profil Akademik untuk Guru: {params.teachersId}</h1>
    );
}
