<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20181118092640 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE program (id INT AUTO_INCREMENT NOT NULL, schecule_id INT DEFAULT NULL, intervenant_id INT DEFAULT NULL, title VARCHAR(255) NOT NULL, hours VARCHAR(10) DEFAULT NULL, INDEX IDX_92ED778461ACFC5B (schecule_id), INDEX IDX_92ED7784AB9A1716 (intervenant_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE schecule (id INT AUTO_INCREMENT NOT NULL, date_name VARCHAR(150) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE program ADD CONSTRAINT FK_92ED778461ACFC5B FOREIGN KEY (schecule_id) REFERENCES schecule (id)');
        $this->addSql('ALTER TABLE program ADD CONSTRAINT FK_92ED7784AB9A1716 FOREIGN KEY (intervenant_id) REFERENCES intervenant (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE program DROP FOREIGN KEY FK_92ED778461ACFC5B');
        $this->addSql('DROP TABLE program');
        $this->addSql('DROP TABLE schecule');
    }
}
