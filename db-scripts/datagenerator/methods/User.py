
def addADMIN(conn):
    cur = conn.cursor()
    insert_query = f"""
                INSERT INTO public.ims_users (
                    username, password, email, user_type, language, activity
                )
                VALUES (
                    'salah_sadgui@um5.ac.ma', 'root', 'salah_sadgui@um5.ac.ma', 'ADMIN', '1', true
                ) RETURNING id
            """

    cur.execute(insert_query)
    conn.commit()
    cur.close()
    print(f"ADMIN user added. (salah_sadgui@um5.ac.ma:root)")


def clear_ims_users(conn):
    cur = conn.cursor()
    Q = "DELETE FROM public.ims_users"
    cur.execute(Q)
    cur.close()
    conn.commit()
    print("ims_users cleared.")